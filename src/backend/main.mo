import Text "mo:core/Text";

actor {
  public type BusinessInfo = {
    siteName : Text;
    phoneNumber : Text;
    address : Text;
    workingHours : Text;
  };

  public query ({ caller }) func getBusinessInfo() : async BusinessInfo {
    {
      siteName = "Sardar Ji Key Maker Home Services";
      phoneNumber = "8459814255";
      address = "3 Shop, Ground floor, opposite Circle, Majiwada Junction, Thane";
      workingHours = "10am-11pm";
    };
  };
};
