<template>
    <div>
        <nav class="navbar navbar-inverse navbar-fixed-top" id="header_nav">
			<!-- <div>	 -->
				<span class="navbar-header">
					<router-link class="navbarTitle" to="/home"><strong>MATK</strong></router-link>
				</span>
				<!-- <span class="title"> -->
				<div class="title">
					<ul class="nav navbar-nav nav_title">
						<li class="navItem" :class="{hometag: homeTag}">
							<router-link class="navLink" to="/home">
								<span @click="changeBackground('homeTag')">Home</span>
							</router-link>
						</li>
						<li class="navItem" :class="{downloadtag: downloadTag}">
							<router-link class="navLink" to="/download">
								<span @click="changeBackground('downloadTag')">Download</span>
							</router-link>
						</li>
						<li class="navItem" :class="{servertag: serverTag}">
							<router-link class="navLink" to="/server">
								<span @click="changeBackground('serverTag')">Web Server</span> 
							</router-link>
						</li>
						<li class="navItem" :class="{helptag: helpTag}">
							<router-link class="navLink" to="/help">
								<span @click="changeBackground('helpTag')">Help</span> 
							</router-link>
						</li>
						<li class="navItem" :class="{contacttag: contactTag}">
							<router-link class="navLink" to="/contact">
								<span @click="changeBackground('contactTag')">Contact</span>
							</router-link>
						</li>
						<li class="navItem">
							<a class="navLink" href="http://renlab.org/">RenLab</a>
						</li>
					</ul>
				<!-- </div>	 -->
				<!-- </span>	 -->
			</div>
		</nav>
    </div>
</template>

<script>
export default {
    data() {
		return {
			homeTag: false,
			downloadTag: false,
			serverTag: false,
			contactTag: false,
            helpTag: false  
		}
	},
	methods: {
		changeBackground(tag) {
			// console.log('tagtag')
			if (tag === 'homeTag') {
				this.homeTag = true;
				this.downloadTag = false;
				this.serverTag = false;
				this.helpTag = false;
				this.contactTag = false;
			} else if (tag === 'downloadTag') {
				this.downloadTag = true;
				this.homeTag = false;
				this.serverTag = false;
				this.helpTag = false;
				this.contactTag = false;
			} else if (tag === 'serverTag') {
				this.serverTag = true;
				this.homeTag = false;
				this.downloadTag = false;
				this.helpTag = false;
				this.contactTag = false;
			} else if (tag === 'helpTag') {
				this.helpTag = true;
				this.homeTag = false;
				this.downloadTag = false;
				this.serverTag = false;
				this.contactTag = false;
			} else if (tag === 'contactTag') {
				this.contactTag = true;
				this.homeTag = false;
				this.downloadTag = false;
				this.serverTag = false;
				this.helpTag = false;
			}
		
		}
	}
}
</script>

<style lang="scss" scoped>
#header_nav {
	font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
	// padding: 0;
	// margin: 0;
}
.navbar-header {
	margin: 0 1.5rem 0 13%;
	padding: 2px 0;
}
.title {
	// float: right;
	position: absolute;
	right: 100px;
	// margin-right: 10%;
	// padding: 0;
	// margin-right: 50px; 
}
// .nav_title {
// 	// padding-right: 5%;
// 	// margin-left: 10%;
// }
.navbarTitle {
	// font-size: 4.5rem;
	font-size: 40px;
	vertical-align: bottom;
}
.navItem {
	// font-size: 3.3rem;
	font-size: 22px;
	color:cornsilk;	
};
.navLink {
	padding: 30px 15px;
};
.hometag, .downloadtag, .contacttag, .servertag, .helptag {
    background-color:lightslategrey;
}
</style>
