import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient | null = null;

function getSupabase(): SupabaseClient {
  if (supabase) return supabase;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Missing Supabase environment variables");
  }

  supabase = createClient(supabaseUrl, supabaseServiceKey);
  return supabase;
}

export async function addSubscriber(email: string): Promise<{ success: boolean; message: string }> {
  try {
    const { error } = await getSupabase()
      .from("subscribers")
      .insert({ email: email.toLowerCase().trim() });

    if (error) {
      if (error.code === "23505") {
        // Unique constraint violation
        return { success: false, message: "Email already subscribed." };
      }
      console.error("Supabase error:", error);
      return { success: false, message: "Something went wrong." };
    }

    return { success: true, message: "Successfully subscribed!" };
  } catch (error) {
    console.error("Error adding subscriber:", error);
    return { success: false, message: "Something went wrong." };
  }
}
