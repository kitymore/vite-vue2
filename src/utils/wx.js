import wx from 'weixin-js-sdk';
import { wxConfig } from '@/api';
async function wxconfig() {
  const url = window.location.href.split('#')[0];
  wxConfig({ url }).then(result => {
    wx.config({
      appId: result.appId,
      nonceStr: result.nonceStr,
      signature: result.signature,
      timestamp: result.timestamp,
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      jsApiList: [
        // 必填，需要使用的JS接口列表
      ],
    });
  });
}
export default wxconfig;
