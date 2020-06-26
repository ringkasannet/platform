<template> 
<div> 
<p><b>Note:</b> This example does not work in Internet Explorer 9 and earlier versions.</p>

<div class="anim"></div>

<p><b>Note:</b> When an animation is finished, it changes back to its original style.</p>
</div>
</template>


<style> 
.anim {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}

@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}
</style>
