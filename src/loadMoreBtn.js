// export default class LoadMoreBtn {
//     constructor(selector) {
//       this.button = document.querySelector(selector);
  
//       if (this.button) {
//         this.isHidden = true;
//         this.button.addEventListener('click', this.onClick.bind(this));
//       } else {
//         console.error(`Element with selector ${selector} not found.`);
//       }
//     }
  
//     onClick() {
//         if (this.onClickCallback) {
//           this.onClickCallback();
//         }
//       }
    
//       show() {
//         this.isHidden = false;
//         this.button.style.display = 'block';
//       }
    
//       hide() {
//         this.isHidden = true;
//         this.button.style.display = 'none';
//       }
    
//       setOnClickCallback(callback) {
//         this.onClickCallback = callback;
//       }
//   }
  