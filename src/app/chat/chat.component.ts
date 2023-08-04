import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  chatMessages: { sender: string; content: string }[] = [];
  userMessage: string = '';

  sendMessage() {
    // Trim the user message to remove extra spaces
    const trimmedMessage = this.userMessage.trim();

    if (trimmedMessage) {
      // Add the user's message to the chat list
      this.chatMessages.push({ sender: 'You', content: trimmedMessage });
      // Clear the input field after sending the message
      this.userMessage = '';
    }
  }
}

