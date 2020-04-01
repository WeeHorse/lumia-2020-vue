<template>
  <div id="app" class="page corners padding transp">
    <header>
      <nav class="nav flex-column flex-sm-row">
        <router-link to="/" class="flex-sm-fill flex-grow-1 text-sm-left nav-link active">
          <h1>Lumia</h1>
        </router-link>
        <router-link to="/contact" class="text-sm-right nav-link">Kontakta oss</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style src="@/styles/style.css">
</style>
