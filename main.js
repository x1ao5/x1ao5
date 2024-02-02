// main.js

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi';
import { mainnet, arbitrum } from 'viem/chains';

// 1. 定義常數
const projectId = 'test';

// 2. 創建 wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [mainnet, arbitrum];
const config = defaultWagmiConfig({ chains, projectId, metadata });

const modal = createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // 選用 - 默認使用 Cloud 配置
});

// 3. 處理按鈕點擊事件
const connectWalletBtn = document.getElementById('connectWalletBtn');

connectWalletBtn.addEventListener('click', async () => {
  try {
    // 4. 使用 Web3Modal 連接錢包
    const provider = await modal.connect();
    console.log('Connected to wallet:', provider);

    // 5. 在這裡你可以執行連接成功後的邏輯
    // 例如，檢查餘額、執行交易等

    // 這只是一個簡單的例子，實際情況中，你可能需要進一步的邏輯處理
  } catch (error) {
    console.error('Failed to connect to wallet:', error.message);
  }
});
