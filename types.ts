export enum Role {
  USER = 'user',
  AI = 'ai',
}

export enum OutputFormat {
  TEXT = 'text',
  IMAGE = 'image',
}

export interface MessageType {
  id: string;
  role: Role;
  content: string; // For text, this is the markdown content. For images, this is the image URL (base64).
  prompt?: string; // The original prompt, especially for images to allow editing.
  format: OutputFormat;
}
