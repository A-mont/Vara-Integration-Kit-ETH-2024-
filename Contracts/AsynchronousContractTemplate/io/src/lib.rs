#![no_std]

use gstd::{ prelude::*, ActorId };
use gmeta::{In,Out,InOut,Metadata};


// 1. Create your own Actions
#[derive(Encode, Decode, TypeInfo,  Clone)]
pub enum Action {
    
    // Add Actions
    FirstAction, // Example an action with a simple input
    SecondAction(String), // Example an action with a u128 input
    ThirdAction(u128), // Example an action with a String input
    Fourthaction(CustomInput), // Example an action with a custom input
  
    
}

// Example of a custom input for an action
#[derive(Default, Encode, Decode, Clone, TypeInfo)]
pub struct CustomInput {
    firstfield: String,
    secondfield: u128,
    thirdfield: ActorId,
   
}


// 2. Create your own Events
#[derive(Encode, Decode, TypeInfo, Hash, PartialEq, PartialOrd, Eq, Ord, Clone, Copy, Debug)]
pub enum  Event {
    
    // Add Events(Example)
    FirstEvent,
    SecondEvent,
    ThirdEvent,
    FourtEvent
}


// 3. Create your own Struct
#[derive(Default, Clone, Encode, Decode, TypeInfo)]
pub struct IoCustomStruct {
   pub firstfield: String,
   pub secondfield: u128,
   pub thirdfield: Vec<(ActorId,u128)>
   
}

// 4. Create your init Struct
#[derive(Decode, Encode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub struct InitStruct {
   
    // Example:
    pub ft_program_id: ActorId,
}


pub struct ContractMetadata;

// 5. Define the structure of actions, events and state for your metadata.
impl Metadata for ContractMetadata{
     type Init = In<InitStruct>;
     type Handle = InOut<Action,Event>;
     type Others = ();
     type Reply=();
     type Signal = ();
     type State = Out<IoCustomStruct>;

}