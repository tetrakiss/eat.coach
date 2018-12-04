/* eslint-disable no-alert, no-console */
<template>
    <div>
        <Menu v-bind="this.$attrs" @openMenu="openMenu" @closeMenu="closeMenu">
          <router-link class="nav-link" to="/customers">
            <font-awesome-icon icon="users" class="marginRight menuIcons"></font-awesome-icon>
            <span>Клиенты</span>
          </router-link>

            <a href="#" @click.prevent="logout">
              <font-awesome-icon icon="sign-out-alt" class="marginRight menuIcons"></font-awesome-icon>

                <span>Выход</span>
            </a>
        </Menu>
    </div>
</template>

<script>
import { auth } from '@/components/firebaseInit'
    import Menu from '@/components/Menu';
    export default {
      name: 'slide',
      components: {
        Menu: Menu
      },
      methods: {
        logout : function() {
          auth.signOut().then(()=>{
            this.$router.replace('login')
          })
        },
        openMenu() {
          this.$emit('openMenu');
        },
        closeMenu() {
          this.$emit('closeMenu');
        }
      }
    };
</script>
