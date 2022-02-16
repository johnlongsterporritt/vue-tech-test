<template>
    <div class="contact">
        <form action="">
            <div>
                <label for="first_name">First name</label>
                <input type="text" name="first_name" id="first_name">
            </div>

            <div>
                <label for="last_name">Last name</label>
                <input type="text" name="last_name" id="last_name">
            </div>

            <div>
                <label for="email">Email</label>
                <input type="text" name="email" id="email">
            </div>

            <div>
                <label for="phone_number">Phone</label>
                <input type="text" name="phone_number" id="phone_number">
            </div>

            <div>
                <label for="address_line_1">Address Line 1</label>
                <input type="text" name="address_line_1" id="address_line_1">
            </div>

            <div>
                <label for="address_line_2">Address Line 2</label>
                <input type="text" name="address_line_2" id="address_line_2">
            </div>

            <div>
                <label for="county">County</label>
                <input type="text" name="county" id="county">
            </div>

            <div>
                <label for="postcode">Postcode</label>
                <input type="text" name="postcode" id="postcode">
            </div>

            <div>
                <label for="enquiry">Enquiry</label>
                <textarea type="text" name="enquiry" id="enquiry"></textarea>
            </div>

            <div>
                <label for="privacy_policy">I have read and agree to the <a href="#">privacy policy</a></label>
                <input type="checkbox" name="privacy_policy" id="privacy_policy">
            </div>

            <div>
                <input type="submit" value="Send">
            </div>
        </form>
    </div>
</template>