<template>
<footer class="bg-dark text-light text-center text-lg-start">
    <!-- Grid container -->
    <div class="container p-4">
        <!--Grid row-->
        <div class="row">
            <!--Grid column-->
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 class="text-uppercase">Newsletter</h5>

                <div class="my-3">
                    <form class="d-flex">
                        <input type="email" class="form-control" placeholder="Your Email">
                        <button type="submit" class="btn btn-primary ms-2">Subscribe</button>
                    </form>
                </div>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                    <li>
                        <a href="#!" class="text-light">About Us</a>
                    </li>
                    <li>
                        <a href="#!" class="text-light">Resources</a>
                    </li>
                    <li>
                        <a href="#!" class="text-light">Blog</a>
                    </li>
                    <li>
                        <a href="#!" class="text-light">Learn</a>
                    </li>
                    <li>
                        <a href="#!" class="text-light">Developers</a>
                    </li>
                </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-0">Follow Us</h5>
                <ul class="list-unstyled">
                    <li>
                        <a href="" class="btn btn-outline-light btn-floating m-1">
							<i>
							<font-awesome-icon :icon="['fab', 'discord']" size="sm" />
							</i>
						</a>
                    </li>
                    <li>
                        <a href="#!" class="btn btn-outline-light btn-floating m-1">
							<font-awesome-icon :icon="['fab', 'telegram']" size="sm"/>
                        </a>
                    </li>

                </ul>
            </div>
            <!--Grid column-->
        </div>
        <!--Grid row-->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2023 Copyright: <a class="text-light" href="https://yourwebsite.com/">YourWebsite</a>
    </div>
</footer>

</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
	components:{FontAwesomeIcon},
    setup () {


        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>
