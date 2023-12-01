export function moveable() {
   var obj, x, y, prev_x, prev_y;
 
   function isDescendant(child, parent) {
     // Check if 'child' is a descendant of 'parent'
     let node = child.parentNode;
     while (node !== null) {
       if (node === parent) {
         return true;
       }
       node = node.parentNode;
     }
     return false;
   }
 
   function dragStart(e) {
     const ballElement = e.target.closest('.ball');
 
     if (ballElement) {
       obj = ballElement;
       e.preventDefault(); // Prevent default behavior
       prev_x = x - obj.offsetLeft;
       prev_y = y - obj.offsetTop;
       obj.style.opacity = 0.8;
       obj.style.userSelect = 'none';
       obj.style.webkitUserSelect = 'none';
       obj.style.MozUserSelect = 'none';
       obj.style.msUserSelect = 'none';
     } else {
       obj = null; // Reset obj if the clicked element is not .ball or its descendant
     }
   }
 
   function move(e) {
     if (e.pageX) {
       x = e.pageX;
       y = e.pageY;
     }
 
     if (obj) {
       obj.style.left = (x - prev_x) + 'px';
       obj.style.top = (y - prev_y) + 'px';
     }
   }
 
   function dragEnd() {
     if (obj) {
       obj.style.opacity = 1;
       obj.style.userSelect = '';
       obj.style.webkitUserSelect = '';
       obj.style.MozUserSelect = '';
       obj.style.msUserSelect = '';
       obj = null;
     }
   }
 
   document.addEventListener('mousedown', dragStart);
   document.addEventListener('mousemove', move);
   document.addEventListener('mouseup', dragEnd);
 }
 