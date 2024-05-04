var clevertap = {
  event: [],
  profile: [],
  account: [],
  onUserLogin: [],
  notifications: [],
  privacy: [],
};
// replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
clevertap.account.push({ id: "Z44-Z4K-K65Z" }, "", "");
clevertap.privacy.push({ optOut: false }); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({ useIP: false }); //set the flag to true, if the user agrees to share their IP data
(function () {
  var wzrk = document.createElement("script");
  wzrk.type = "text/javascript";
  wzrk.async = true;
  wzrk.src =
    ("https:" == document.location.protocol
      ? "https://d2r1yp2w7bby2u.cloudfront.net"
      : "http://static.clevertap.com") + "/js/clevertap.min.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(wzrk, s);
})();

document.addEventListener("DOMContentLoaded", function () {
  //-------------------------------------------------------------------------------------

  // Event listener for login button
  document.getElementById("login-btn").addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;

    console.log("Login button pressed!");

    try {
      // Track the login event
      clevertap.onUserLogin.push({
        Site: {
          Name: name, // use the Name variable
          Email: email, // Email address of the user
          Phone: phone, // Phone (with the country code
          DOB: new Date(), // Date of Birth. Date object
        },
      });
      console.log("Login event tracked successfully.");
    } catch (error) {
      console.error("Error tracking login event:", error);
    }
  });

  //-------------------------------------------------------------------------------------

  // Event listener for profile push button
  document
    .getElementById("profile-push-btn")
    .addEventListener("click", function () {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var dob = document.getElementById("dob").value;

      console.log("Profile push button pressed!");

      try {
        clevertap.profile.push({
          Site: {
            Name: name,
            Email: email,
            Phone: phone,
            DOB: new Date(dob),
          },
        });
        console.log("Profile push function executed properly.");
      } catch (error) {
        console.error("Error executing profile push function:", error);
      }
    });

  //----------------------------------------------------------------------------------

  // Event listener for ask for push button
  document
    .getElementById("ask-for-push-btn")
    .addEventListener("click", function () {
      // Implement ask for push event tracking logic here
      console.log("Ask for push button pressed!");
      try {
        // Track the ask for push event
        clevertap.notifications.push({
          titleText: "Would you like to receive Push Notifications?",
          bodyText:
            "We promise to only send you relevant content and give you updates on your transactions",
          okButtonText: "Sign me up!",
          rejectButtonText: "No thanks",
          askAgainTimeInSeconds: 5,
          okButtonColor: "#f28046",
        });
      } catch (error) {
        console.error("Error tracking ask for push event:", error);
      }
    });

  //-------------------------------------------------------------------------------

  document
    .getElementById("raise-event-btn")
    .addEventListener("click", function () {
      var eventName = "Custom Event Anu"; // Replace with your custom event name
      var eventProperties = {
        StringProperty: "Event_Anurag", // String property
        IntegerProperty: 123, // Integer property
        FloatProperty: 3.14, // Float property
        DateTimeProperty: new Date().toISOString(), // Date-time property
        // Add more properties as needed
      };
      try {
        clevertap.event.push(eventName, eventProperties);
        console.log("Custom event raised successfully.");
      } catch (error) {
        console.error("Error raising custom event:", error);
      }
    });
});
