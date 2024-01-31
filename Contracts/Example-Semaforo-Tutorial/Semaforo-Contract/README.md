## Contrato inteligente: Semáforo

## Inicio: Clonar el template para contratos inteligentes

**comando:**
```bash
git clone https://github.com/Vara-Lab/StandardContractTemplate.git
```

## Directorio IO

### PASO 1 Definir las acciones para el semaforo: .
**comando:**
```rust
#[derive(Encode, Decode, TypeInfo, Hash, PartialEq, PartialOrd, Eq, Ord, Clone, Copy, Debug)]
pub enum ActionTrafficLight {
    // Actions
     Green,
     Yellow,
     Red
}

```

### PASO 2 Definir las eventos para el semaforo: .
**comando:**
```rust
#[derive(Encode, Decode, TypeInfo, Hash, PartialEq, PartialOrd, Eq, Ord, Clone, Copy, Debug)]
pub enum EventTrafficLight {
    // Actions
     Green,
     Yellow,
     Red
}

```

### PASO 3 Definir las acciones, estado y eventos.
**comando:**
```rust
pub struct ContractMetadata;

impl Metadata for ContractMetadata{
     type Init = ();
     type Handle = InOut<ActionTrafficLight,EventTrafficLight>; // Acciones como entrada y  eventos como salida.
     type Others = ();
     type Reply=();
     type Signal = ();
     type State = Vec<(ActorId, String)>; // Estado 

}
```


## Directorio src

### PASO 1 Definir en el interior de la función Handle y definimos Acción->Transición->Evento.
**comando:**
```rust

#[no_mangle]
extern "C" fn handle(){


    handle_state().expect("Execution Error")


}

    

fn handle_state() -> Result<()> {

        let payload = msg::load()?;

        if let ActionTrafficLight::Green = payload {

            let currentstate = state_mut();
            currentstate.insert(msg::source(), "Green".to_string());
            msg::reply(EventTrafficLight::Green,0)?;

        }

        if let ActionTrafficLight::Yellow = payload {

            let currentstate = state_mut();
            currentstate.insert(msg::source(), "Yellow".to_string());
            msg::reply(EventTrafficLight::Yellow,0)?;

        }

        if let ActionTrafficLight::Red = payload {

            let currentstate = state_mut();
            currentstate.insert(msg::source(), "Red".to_string());
            msg::reply(EventTrafficLight::Red,0)?;

        }

    Ok(())
}


```

### PASO 2 Definir el state
**comando:**

```rust
 #[no_mangle]
    extern "C" fn state() {

        let state: Vec<_> =state_mut().iter().map(|(k, v)| (*k, v.clone())).collect();
    
        msg::reply(state, 0).expect("failed to encode or reply from `state()`");
    }

```

## Directorio state

### PASO 1 Definir el state
**comando:**
```rust

#![no_std]

use io::*;
use gmeta::{ Metadata, metawasm};
use gstd::{ ActorId, prelude::*};


#[cfg(feature = "binary-vendor")]
include!(concat!(env!("OUT_DIR"), "/wasm_binary.rs"));

#[metawasm]
pub mod metafns {
    pub type State = <ContractMetadata as Metadata>::State;

     pub fn finalstates(state: State, actor: ActorId) -> Vec<&Str> {
        state.into_iter().map(|(_, state)| state).collect()
    }

}

```

### Despliega el contrato en la plataforma IDEA e interactúa con tu contrato.
