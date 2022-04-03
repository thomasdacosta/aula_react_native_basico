import React from 'react';
import { Text, View } from 'react-native';


const App = () => {
  const [mensagem, setMensagem] = React.useState("");
  const [erro, setErro] = React.useState("");

  const OlaMundo = async () => {
    try {
      setErro("")
      setMensagem("")

      const response = await fetch('http://10.0.2.2:8080/v1/basico/get/olaMundo?nome=João');
      const json = await response.json();

      if (json.mensagem !== undefined)
        setMensagem(json.mensagem)

      if (json.status !== undefined)
        setErro(json.status + "-" + json.error)
      console.info(json);
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    OlaMundo();
  }, []);

  return (
      <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}>
        <Text>{mensagem}</Text>
        <Text>{erro}</Text>
      </View>
  )
}

export default App;