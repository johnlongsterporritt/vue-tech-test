<template>
  <div class="contact">
    <h1>Contact</h1>
    <p>Please feel in the form below and we will be in touch as soon as possible!</p>
    <form action="">
      <div class="row mb-2">
        <div class="col-sm-6 mb-0">

          <div class="row">
            <div class="col-sm-6">
              <div class="from-group">
                <label for="first_name" class="form-label">First name *</label>
                <input type="text" name="first_name" id="first_name" class="form-control" placeholder="First Name"
                       required>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="from-group">
                <label for="last_name" class="form-label">Last name *</label>
                <input type="text" name="last_name" id="last_name" class="form-control" placeholder="Last Name"
                       required>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <div class="from-group">
                <label for="email" class="form-label">Email *</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="Email Address" required>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="from-group">
                <label for="phone_number" class="form-label">Phone</label>
                <input type="number" name="phone_number" id="phone_number" class="form-control"
                       placeholder="Phone Number">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="from-group">
                <label for="address_line_1" class="form-label">Address Line 1 *</label>
                <input type="text" name="address_line_1" id="address_line_1" class="form-control"
                       placeholder="Address Line 1" required>
              </div>
            </div>

            <div class="col-12">
              <div class="from-group">
                <label for="address_line_2" class="form-label">Address Line 2</label>
                <input type="text" name="address_line_2" id="address_line_2" class="form-control"
                       placeholder="Address Line 2">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 mb-0">
              <div class="from-group">
                <label for="county" class="form-label">County *</label>
                <input type="text" name="county" id="county" class="form-control" placeholder="County" required>
              </div>
            </div>

            <div class="col-sm-6 mb-0">
              <div class="from-group">
                <label for="postcode" class="form-label">Postcode</label>
                <input type="text" name="postcode" id="postcode" class="form-control" placeholder="Postcode" required>
              </div>
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="from-group enquiry-container">
            <label for="enquiry" class="form-label">Enquiry *</label>
            <textarea type="text" name="enquiry" id="enquiry" class="form-control" placeholder="Please tell us your enquiry" required></textarea>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="from-check form-check-inline">
            <label for="privacy_policy" class="form-check-input">I have read and agree to the
              <a href="#" data-toggle="modal" data-target="#PrivacyPolicyModal">privacy policy</a></label>
            <input type="checkbox" name="privacy_policy" id="privacy_policy" class="form-check-input" required>
          </div>
        </div>
        <div class="col-12">

        <div class="from-group">
          <input type="submit" value="Send" class="btn btn-primary">
        </div>
        </div>
      </div>
    </form>
  </div>

  <div class="modal fade" id="PrivacyPolicyModal" tabindex="-1" role="dialog" aria-labelledby="PrivacyPolicyModalLabel"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Privacy Policy</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>