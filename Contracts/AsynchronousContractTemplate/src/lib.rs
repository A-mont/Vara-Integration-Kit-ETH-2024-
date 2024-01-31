
#![no_std]
use gstd::{msg,async_main, collections::HashMap , prelude::*,ActorId};
use io::*;

#[cfg(feature = "binary-vendor")]
include!(concat!(env!("OUT_DIR"), "/wasm_binary.rs"));


// 1. Create the main state as a static variable.
static mut STATE:Option<CustomStruct> = None;

// 1.1 Create the init state.
static mut INIT:Option<InitStruct> = None;



// 2. Create the mutability function for your state.
fn state_mut() -> &'static mut CustomStruct {

    let state = unsafe {  STATE.as_mut()};

    unsafe { state.unwrap_unchecked() }

}

#[warn(dead_code)]
fn init_state_mut() -> &'static mut InitStruct {

    let initstruct = unsafe { INIT.as_mut()};

    unsafe { initstruct.unwrap_unchecked() }

}

// Create a public State
#[derive(Clone, Default)]
pub struct CustomStruct {
    pub firstfield: String,
    pub secondfield: u128,
    pub thirdfield: HashMap<ActorId, u128>,
}

// Create a implementation on State
impl CustomStruct {
    #[allow(dead_code)]
    async fn firstmethod(&mut self) {}
    #[allow(dead_code)]
    async fn secondmethod(&mut self) { }
    #[allow(dead_code)]
    async fn thirdmethod(&mut self) {}
}


// 3. Create the init() function of your contract.
#[no_mangle]
extern "C" fn init () {

    let config: InitStruct = msg::load().expect("Unable to decode InitStruct");

    if config.ft_program_id.is_zero() {
        panic!("InitStruct program address can't be 0");
    }

    let init = InitStruct {
        ft_program_id: config.ft_program_id
    };

    

    unsafe {
        INIT = Some(init);
    }



    let state = CustomStruct {
        ..Default::default()
    };

    unsafe { STATE = Some(state) };


}


// 4.Create the main() function of your contract.
#[async_main]
async fn main(){

        // We load the input message
        let action: Action = msg::load().expect("Could not load Action");

        // We receive an action from the user and update the state. Example:
        match action {
            Action::FirstAction => {

                // Create a variable with mutable state.
                let currentstate = state_mut();

                // Update your state.
                currentstate.thirdfield
                .entry(msg::source())
                .and_modify(|number| *number = number.saturating_add(1))
                .or_insert(1);


                 // Generate your event.
                 let _ =msg::reply(Event::FirstEvent,0);


            }
            Action::SecondAction(input) => {


                 // Create a variable with mutable state.
                let currentstate = state_mut();

                // Update your state with a String input
                currentstate.firstfield = input.to_string();

                 // Generate your event.
                let _ =  msg::reply(Event::SecondEvent,0);
               

            }
            Action::ThirdAction(input) => {
               
                // Create a variable with mutable state.
                let currentstate = state_mut();

                // Update your state with a String input
                currentstate.secondfield = input;

                // Generate your event.
                let _ = msg::reply(Event::ThirdEvent,0);
            }

            // 
            Action::Fourthaction(_input) => {
               
                let _currentstate = state_mut();


                let _ =  msg::reply(Event::ThirdEvent,0);
            }

           
        };
    }

        


// 5. Create the state() function of your contract.
#[no_mangle]
extern "C" fn state() {
   
    let state = unsafe { STATE.take().expect("Unexpected error in taking state") };

    msg::reply::<IoCustomStruct>(state.into(), 0)
    .expect("Failed to encode or reply with `<ContractMetadata as Metadata>::State` from `state()`");
    
}


// Implementation of the From trait for converting CustomStruct to IoCustomStruct
impl From<CustomStruct> for IoCustomStruct {

    // Conversion method
    fn from(value: CustomStruct) -> Self {
        // Destructure the CustomStruct object into its individual fields
        let CustomStruct {
            firstfield,
            secondfield,
            thirdfield,
        } = value;

        // Perform some transformation on thirdfield, cloning its elements
        let thirdfield = thirdfield.iter().map(|(k, v)| (*k, v.clone())).collect();
   
        // Create a new IoCustomStruct object using the destructured fields
        Self {
            firstfield,
            secondfield,
            thirdfield,
        }
    }
}