import type { Member } from "utils";

export type Size = { size: "small" | "large" | "default" }

export type AvatarProps = Size & Member
