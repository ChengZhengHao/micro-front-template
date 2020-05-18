// 当前版本 qiankun 对 insertBefore 处理有问题，这里先使用修改后的本地包
import {
  addGlobalUncaughtErrorHandler,
} from "./es";

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event: Event | string) => {
  console.error(event);
  const { message: msg } = event as any;
  // 加载失败时提示
  if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
    console.error("子应用加载失败，请检查应用是否可运行");
  }
});
