<template>
	<div class="menu">
		<a-menu mode="inline" :open-keys="openKeys" theme="dark" :style="{ height: '100%', borderRight: 0 }" @openChange="onOpenChange">
			<a-sub-menu v-for="item in menuKist" :key="item.index">
				<!-- <span slot="title">
					<a-icon type="mail" /><span>Navigation One</span></span> -->
				<span slot="title">
					<span>{{item.name}}</span>
				</span>
				
				<template v-if="item.children">
					<a-menu-item v-for="item1 in item.children" :key="item1.index">
						{{item1.name}}
					</a-menu-item>
				</template>
				
				
			</a-sub-menu>
		</a-menu>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				rootSubmenuKeys: [1,2,5,8],
				openKeys: [1],
				menuKist: [{
					index: 1,
					name: "首页"
				}, {
					index: 2,
					name: "用户管理",
					children: [{
						index: 3,
						name: "用户列表",
					}, {
						index: 4,
						name: "达人推荐列表",
					}]
				}, {
					index: 5,
					name: "文章管理",
					children: [{
						index: 6,
						name: "文章列表",
					}, {
						index: 7,
						name: "回复消息",
					}]
				}, {
					index: 8,
					name: "外链管理"
				}, ]
			};
		},
		methods: {
			onOpenChange(openKeys) {
				const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
				if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
					this.openKeys = openKeys;
				} else {
					this.openKeys = latestOpenKey ? [latestOpenKey] : [];
				}
			},
		},
	};
</script>


<style lang="scss" scoped>
	.menu {
		.ant-menu {
			height: 100vw;
			position: fixed;
			left: 0;
			max-width: 200px;
		}
	}
</style>
