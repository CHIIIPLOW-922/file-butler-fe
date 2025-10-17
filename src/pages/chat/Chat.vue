<template>
  <div class="chat">
    <!-- 左侧会话栏 -->
    <aside class="chat-aside">
      <ChatAside />
    </aside>

    <!-- 右侧主区域 -->
    <main class="chat-main">
      <div class="chat-content">
        <ChatContent />
      </div>

      <div class="chat-input">
        <ChatInput />
      </div>
    </main>
  </div>
</template>

<script setup>
import ChatAside from '@/pages/chat/components/ChatAside.vue';
import ChatContent from '@/pages/chat/components/ChatContent.vue';
import ChatInput from '@/pages/chat/components/ChatInput.vue';
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  height: 100vh;
  overflow: hidden;

  /* 左侧侧边栏 */
  .chat-aside {
    width: 260px;
    background-color: #ffffff;
    border-right: 1px solid #e5e5e5;
    display: flex;
    flex-direction: column;
  }

  /* 右侧主区域 */
  .chat-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  /* 聊天内容区 */
  .chat-content {
    flex: 1;
    overflow-y: auto;
    padding: 24px;
    scroll-behavior: smooth;

    /* 滚动条样式（可选） */
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: #d1d1d1;
      border-radius: 4px;
    }
  }

  /* 底部输入框固定 */
  .chat-input {
    border-top: 1px solid #e5e5e5;
    background-color: #fff;
    padding: 16px 24px;
  }
}
</style>
