<template>
  <div>
    <el-container>
      <ClientOnly>
        <StyleSwitcher />
      </ClientOnly>
      <el-aside width="270px">
        <Aside />
      </el-aside>
      <main class="main-container">
        <slot />
      </main>
    </el-container>

    <link rel="stylesheet" href="/skins/color-1.css" class="alternate-style" title="color-1" disabled>
    <link rel="stylesheet" href="/skins/color-2.css" class="alternate-style" title="color-2" disabled>
    <link rel="stylesheet" href="/skins/color-3.css" class="alternate-style" title="color-3" disabled>
    <link rel="stylesheet" href="/skins/color-4.css" class="alternate-style" title="color-4" disabled>
    <link rel="stylesheet" href="/skins/color-5.css" class="alternate-style" title="color-5" disabled>
  </div>
</template>