import ReactDOM from 'react-dom';
// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import '../@hzbdesign/style/common/index.less';
import '../@hzbdesign/style/buttons/buttons.scss';
import '@icedesign/base/reset.scss';
import './theme.scss';
import './assets/fonts.css';
import router from './router';

const ICE_CONTAINER = document.getElementById('ice-container');

if (!ICE_CONTAINER) {
  throw new Error('当前页面不存在 <div id="ice-container"></div> 节点.');
}

ReactDOM.render(router, ICE_CONTAINER);
