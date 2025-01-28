export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      waitlist_companies: {
        Row: {
          category: Database["public"]["Enums"]["company_category"]
          company_name: string
          company_size: Database["public"]["Enums"]["company_size"]
          corporate_email: string
          created_at: string
          id: string
          responsible_name: string
          role: Database["public"]["Enums"]["company_role"]
          status: string
        }
        Insert: {
          category: Database["public"]["Enums"]["company_category"]
          company_name: string
          company_size: Database["public"]["Enums"]["company_size"]
          corporate_email: string
          created_at?: string
          id?: string
          responsible_name: string
          role: Database["public"]["Enums"]["company_role"]
          status?: string
        }
        Update: {
          category?: Database["public"]["Enums"]["company_category"]
          company_name?: string
          company_size?: Database["public"]["Enums"]["company_size"]
          corporate_email?: string
          created_at?: string
          id?: string
          responsible_name?: string
          role?: Database["public"]["Enums"]["company_role"]
          status?: string
        }
        Relationships: []
      }
      waitlist_developers: {
        Row: {
          birth_date: string
          created_at: string
          email: string
          full_name: string
          id: string
          role: Database["public"]["Enums"]["developer_role"]
          seniority: Database["public"]["Enums"]["seniority_level"]
          status: string
          tech_stack: string[]
        }
        Insert: {
          birth_date: string
          created_at?: string
          email: string
          full_name: string
          id?: string
          role: Database["public"]["Enums"]["developer_role"]
          seniority: Database["public"]["Enums"]["seniority_level"]
          status?: string
          tech_stack: string[]
        }
        Update: {
          birth_date?: string
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          role?: Database["public"]["Enums"]["developer_role"]
          seniority?: Database["public"]["Enums"]["seniority_level"]
          status?: string
          tech_stack?: string[]
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      company_category:
        | "fintech"
        | "technology"
        | "healthcare"
        | "marketing"
        | "e-commerce"
        | "other"
      company_role:
        | "ceo"
        | "cto"
        | "coo"
        | "cpo"
        | "developer"
        | "analyst"
        | "other"
      company_size:
        | "small (1-10 employees)"
        | "medium (11-50 employees)"
        | "large (50+ employees)"
      developer_role:
        | "full stack"
        | "front end"
        | "back end"
        | "mobile developer"
        | "data science"
        | "devops"
        | "qa tester"
        | "other"
      seniority_level:
        | "junior (0-2 years)"
        | "mid-level (3-5 years)"
        | "senior (6+ years)"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
