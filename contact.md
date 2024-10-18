---
layout: default
title: Keep me updated!
---


<p>
<form
  action="https://formcarry.com/s/iy9helLGmjq"
  method="POST"
>
    <div class="mb-3">
        <label for="userTypeDescription" class="form-label">What kind of updates are you interested in?</label>
        <div class="btn-group-toggle mt-2" data-toggle="buttons">
            <input type="radio" class="btn-check" id="customer" autocomplete="off" value="customer" name="updateType" checked>
            <label class="btn btn-outline-secondary" for="customer"><i class="fas fa-user"></i> Customer</label>

            <input type="radio" class="btn-check" id="employee" autocomplete="off" value="employee" name="updateType">
            <label class="btn btn-outline-secondary" for="employee"><i class="fas fa-user-tie"></i> Employee</label>

            <input type="radio" class="btn-check" id="investor" autocomplete="off" value="investor" name="updateType">
            <label class="btn btn-outline-secondary" for="investor"><i class="fas fa-hand-holding-usd"></i> Investor</label>

            <input type="radio" class="btn-check" id="general" autocomplete="off" value="general" name="updateType">
            <label class="btn btn-outline-secondary" for="general"><i class="fas fa-cog"></i> General</label>
        </div>
    </div>

    <div class="mb-3">
        <label for="firstName" class="form-label">First Name *</label>
        <input type="text" class="form-control" id="firstName" name="firstName" required>
    </div>
    <div class="mb-3">
        <label for="lastName" class="form-label">Last Name *</label>
        <input type="text" class="form-control" id="lastName" name="lastName" required>
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">Email Address *</label>
        <input type="email" class="form-control" id="email" name="email" required>
    </div>
    <div class="mb-3">
        <label for="company" class="form-label">Company (optional)</label>
        <input type="text" class="form-control" id="company" name="company">
    </div>
    <div class="mb-3">
        <label for="comments" class="form-label">Comments (optional)</label>
        <textarea class="form-control" id="comments" name="comments" rows="4"></textarea>
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="privacyPolicy" name="privacyPolicy" required>
        <label class="form-check-label" for="privacyPolicy">I accept the <a href="{{ site.baseurl }}/company/privacy">privacy policy</a>.</label>
    </div>
    <button type="submit" class="btn btn-primary btn-styled">Submit</button>
</form>
</p>

<p>
You can always contact us through one of the following email addresses:
</p>

<table class="table table-hover">
    <thead class="table-dark">
        <tr>
            <th>Email</th>
            <th>Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><mail to="customers" addBody="true"></mail></td>
            <td>Customer inquiries and support</td>
        </tr>
        <tr>
            <td><mail to="investors" addBody="true"></mail></td>
            <td>Investor relations and inquiries</td>
        </tr>
        <tr>
            <td><mail to="careers" addBody="true"></mail></td>
            <td>Job applications and career inquiries</td>
        </tr>
        <tr>
            <td><mail to="info" addBody="true"></mail></td>
            <td>General information and inquiries</td>
        </tr>
    </tbody>
</table>

<script>
    // Function to get query parameter by name
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Function to set the radio button based on the query parameter
    function setRadioButton() {
        const updateType = getQueryParam('updateType');
        if (updateType) {
            document.getElementById(updateType).checked = true;
        }
    }

    // Call the function when the page loads
    window.onload = setRadioButton;
</script>