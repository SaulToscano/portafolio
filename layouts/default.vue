<template>
  <div>
    <el-container>
      <el-aside width="270px">
        <Aside />
      </el-aside>
      <main class="main-container">
        <slot />
      </main>
    </el-container>
  </div>
</template>