export interface CreateChat {
  category?: string
  senderEmail: string
  recipientsEmails: string[]
  title: string
  content: string
}

export interface Ticket {
  id: number
  title: string
  lastResponse: string
  status: string
}

export interface MapAllChats {
  id: string
  lastMessage: {
    title: string
    status: string
  }
  updatedAt: {
    _seconds: number
  }
}

export interface Message {
  id: string
  senderName: string
  content: string
  timestamp: { _seconds: number; _nanoseconds: number }
}

export interface CreateMessageChat {
  chatId: string;
  authorName: string;
  authorEmail: string;
  senderId: string;
  content: string;
}
