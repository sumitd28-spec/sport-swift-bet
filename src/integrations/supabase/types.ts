export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      highlights: {
        Row: {
          created_at: string
          duration: number
          id: string
          match_id: string
          thumbnail_url: string | null
          title: string
          updated_at: string
          video_url: string
        }
        Insert: {
          created_at?: string
          duration: number
          id?: string
          match_id: string
          thumbnail_url?: string | null
          title: string
          updated_at?: string
          video_url: string
        }
        Update: {
          created_at?: string
          duration?: number
          id?: string
          match_id?: string
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
          video_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "highlights_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "highlights_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "premium_matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "highlights_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "public_matches"
            referencedColumns: ["id"]
          },
        ]
      }
      live_commentary: {
        Row: {
          ball_number: number | null
          commentary: string
          created_at: string
          event_type: string | null
          id: string
          match_id: string
          over_number: number | null
          timestamp: string
        }
        Insert: {
          ball_number?: number | null
          commentary: string
          created_at?: string
          event_type?: string | null
          id?: string
          match_id: string
          over_number?: number | null
          timestamp?: string
        }
        Update: {
          ball_number?: number | null
          commentary?: string
          created_at?: string
          event_type?: string | null
          id?: string
          match_id?: string
          over_number?: number | null
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "live_commentary_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "live_commentary_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "premium_matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "live_commentary_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "public_matches"
            referencedColumns: ["id"]
          },
        ]
      }
      matches: {
        Row: {
          away_team_id: string
          broadcast_rights: string | null
          created_at: string
          home_team_id: string
          id: string
          is_free: boolean | null
          league: string
          match_slug: string
          score_snapshot: string | null
          start_time_utc: string
          status: string
          stream_url: string | null
          timezone_display: string | null
          updated_at: string
          venue: string
        }
        Insert: {
          away_team_id: string
          broadcast_rights?: string | null
          created_at?: string
          home_team_id: string
          id?: string
          is_free?: boolean | null
          league: string
          match_slug: string
          score_snapshot?: string | null
          start_time_utc: string
          status: string
          stream_url?: string | null
          timezone_display?: string | null
          updated_at?: string
          venue: string
        }
        Update: {
          away_team_id?: string
          broadcast_rights?: string | null
          created_at?: string
          home_team_id?: string
          id?: string
          is_free?: boolean | null
          league?: string
          match_slug?: string
          score_snapshot?: string | null
          start_time_utc?: string
          status?: string
          stream_url?: string | null
          timezone_display?: string | null
          updated_at?: string
          venue?: string
        }
        Relationships: [
          {
            foreignKeyName: "matches_away_team_id_fkey"
            columns: ["away_team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_home_team_id_fkey"
            columns: ["home_team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          created_at: string
          id: string
          logo_url: string | null
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          logo_url?: string | null
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          logo_url?: string | null
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_subscriptions: {
        Row: {
          created_at: string
          expires_at: string | null
          id: string
          is_active: boolean
          subscription_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          subscription_type?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          subscription_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      premium_matches: {
        Row: {
          away_team_id: string | null
          broadcast_rights: string | null
          created_at: string | null
          home_team_id: string | null
          id: string | null
          is_free: boolean | null
          league: string | null
          match_slug: string | null
          score_snapshot: string | null
          start_time_utc: string | null
          status: string | null
          stream_url: string | null
          timezone_display: string | null
          updated_at: string | null
          venue: string | null
        }
        Insert: {
          away_team_id?: string | null
          broadcast_rights?: string | null
          created_at?: string | null
          home_team_id?: string | null
          id?: string | null
          is_free?: boolean | null
          league?: string | null
          match_slug?: string | null
          score_snapshot?: string | null
          start_time_utc?: string | null
          status?: string | null
          stream_url?: string | null
          timezone_display?: string | null
          updated_at?: string | null
          venue?: string | null
        }
        Update: {
          away_team_id?: string | null
          broadcast_rights?: string | null
          created_at?: string | null
          home_team_id?: string | null
          id?: string | null
          is_free?: boolean | null
          league?: string | null
          match_slug?: string | null
          score_snapshot?: string | null
          start_time_utc?: string | null
          status?: string | null
          stream_url?: string | null
          timezone_display?: string | null
          updated_at?: string | null
          venue?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "matches_away_team_id_fkey"
            columns: ["away_team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_home_team_id_fkey"
            columns: ["home_team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      public_matches: {
        Row: {
          away_team_id: string | null
          broadcast_rights: string | null
          created_at: string | null
          home_team_id: string | null
          id: string | null
          is_free: boolean | null
          league: string | null
          match_slug: string | null
          score_snapshot: string | null
          start_time_utc: string | null
          status: string | null
          stream_url: string | null
          timezone_display: string | null
          updated_at: string | null
          venue: string | null
        }
        Insert: {
          away_team_id?: string | null
          broadcast_rights?: string | null
          created_at?: string | null
          home_team_id?: string | null
          id?: string | null
          is_free?: boolean | null
          league?: string | null
          match_slug?: string | null
          score_snapshot?: string | null
          start_time_utc?: string | null
          status?: string | null
          stream_url?: never
          timezone_display?: string | null
          updated_at?: string | null
          venue?: string | null
        }
        Update: {
          away_team_id?: string | null
          broadcast_rights?: string | null
          created_at?: string | null
          home_team_id?: string | null
          id?: string | null
          is_free?: boolean | null
          league?: string | null
          match_slug?: string | null
          score_snapshot?: string | null
          start_time_utc?: string | null
          status?: string | null
          stream_url?: never
          timezone_display?: string | null
          updated_at?: string | null
          venue?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "matches_away_team_id_fkey"
            columns: ["away_team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_home_team_id_fkey"
            columns: ["home_team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      user_has_premium_access: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
