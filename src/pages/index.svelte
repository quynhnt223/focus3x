<script>
    import { pageIsLoading } from './store.js'

    import BoardLogo from './components/BoardLogo.svelte'
    import BoardItem from './components/BoardItem.svelte'
    import BoardList from './components/BoardList.svelte'    
    import EditBoardBar from './components/EditBoardBar.svelte'
    import EditBoardBox from './components/EditBoardBox.svelte'
    import ColorBar from './components/ColorBar.svelte'
    import AddNewBoard from './components/AddNewBoard.svelte'
    import CoverImageBar from './components/CoverImageBar.svelte'
    import DeleteBoard from './components/DeleteBoard.svelte'
    import DeleteWarning from './components/DeleteWarning.svelte'
    import SortableGuide from './components/SortableGuide.svelte'
    import EditNameBox from './components/EditNameBox.svelte'
    import UploadCoverImage from './components/UploadCoverImage.svelte'
    import DoneDesignBtn from './components/DoneDesignBtn.svelte'
    import DoneEditBoardBtn from './components/DoneEditBoardBtn.svelte'
    import CancelEditingBoard from './components/CancelEditingBoard.svelte'
    import LoadingPage from './components/LoadingPage.svelte'
    import StatusBar from './components/StatusBar.svelte';
    import Moveable from './components/Moveable.svelte';
</script>
<BoardLogo></BoardLogo>
<BoardItem></BoardItem>
<BoardList></BoardList>
<EditBoardBar></EditBoardBar>
<EditBoardBox></EditBoardBox>
<ColorBar></ColorBar>
<AddNewBoard></AddNewBoard>
<CoverImageBar></CoverImageBar>
<DeleteBoard></DeleteBoard>
<DeleteWarning></DeleteWarning>
<SortableGuide></SortableGuide>
<EditNameBox></EditNameBox>
<UploadCoverImage></UploadCoverImage>
<DoneDesignBtn></DoneDesignBtn>
<DoneEditBoardBtn></DoneEditBoardBtn>
<CancelEditingBoard></CancelEditingBoard>
<StatusBar></StatusBar>
<Moveable></Moveable>

{#if $pageIsLoading}
<LoadingPage></LoadingPage>
{/if}