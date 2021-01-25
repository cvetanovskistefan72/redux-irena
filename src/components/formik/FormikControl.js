import { Input } from "./Input";
import { Radio } from "./Radio";


export const FormikControl = (props) =>{
    const { control ,...rest} = props
    switch(control){
        case "input":
            return <Input {...rest}/>;
        case "radio":
            return <Radio {...rest}/>;            
        default:
            return null;
    }
}