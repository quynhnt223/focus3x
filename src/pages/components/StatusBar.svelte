<script>
   import { boardId, boardList, isEditBarVisible, pageIsLoading } from "../store";

</script>
<div   class="ball btn-wrap">
   <h3>Store Status Bar</h3>
   <div>boardId: {$boardId}</div>
   <div>boardList: {$boardList}</div>
   <div>isEditBarVisible: {$isEditBarVisible}</div>
   <div>pageIsLoading: {$pageIsLoading}</div>   
   <div>...: </div>
</div>
<div   class="ball btn-wrap">
   <h3>Store Status Bar</h3>
   <div>boardId: {$boardId}</div>
   <div>boardList: {$boardList}</div>
   <div>isEditBarVisible: {$isEditBarVisible}</div>
   <div>pageIsLoading: {$pageIsLoading}</div>   
</div>
<style>
.btn-wrap {
   position: absolute;      
   background: #fff;
   color: #333;
   padding: 9px 15px;   
   left: 12px;
   top: 120px;  
   border-radius: 3px;  
   box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; 
   
}
</style>