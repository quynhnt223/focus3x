<script>
   import { moveable } from '../utils/moveable.js'
   import { afterPageLoad } from '@roxi/routify';

   $afterPageLoad(() => {
      moveable()
   })
   
</script>
<div></div>
<style>
   #ball{
  position: absolute;
  width: 200px;
  height: 200px;
  top: 100px;
  left: 100px;
  background: #0044ff;
  border-radius: 100%;
  box-shadow: inset 0 0 100px #000;
}
</style>