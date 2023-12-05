import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import * as yup from 'yup'; // Yup package is used for validation of forms input .
import BouncyCheckbox from 'react-native-bouncy-checkbox'; //for prebuild checkboxes
import {Formik} from 'formik'; // for handling form data as html form is not valid in react-native
//Form validation  using Yup

const passwordschema = yup.object({
  passwordlength: yup
    .number()
    .min(6, 'min length should be 6')
    .max(14, 'max length should be 14')
    .required('Length is required'),
});
export default function App() {
  const [password, setpassword] = useState('');
  const [ispassgenerated, setispassgenerated] = useState(false);
  const [lowercase, setlowercase] = useState(true);
  const [uppercase, setuppercase] = useState(false);
  const [numbers, setnumber] = useState(false);
  const [symbols, setsymbol] = useState(false);

  const generatepasswordstring = (passwordlength: number) => {
    let characterlist = '';

    const lowercasechar = 'abcdefghijklmnopqrstuvwxyz';
    const uppercasechar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digitschar = '0123456789';
    const symbolschar = '!@#$%^&*_-?/,.';

    if (lowercase) {
      characterlist += lowercasechar;
    }
    if (uppercase) {
      characterlist += uppercasechar;
    }
    if (numbers) {
      characterlist += digitschar;
    }
    if (symbols) {
      characterlist += symbolschar;
    }

    const passwordsres = createpassword(characterlist, passwordlength);
    setpassword(passwordsres);
    setispassgenerated(true);
  };

  const createpassword = (characters: string, passwordlength: number) => {
    let res = '';

    for (let i = 0; i < passwordlength; i++) {
      const characterindex = Math.round(Math.random() * characters.length);
      res += characters.charAt(characterindex);
    }

    return res;
  };
  const resetpasswordstate = () => {
    setpassword('');
    setlowercase(true);
    setnumber(false);
    setispassgenerated(false);
    setsymbol(false);
    setuppercase(false);
  };

  return (
    <ScrollView style={styles.Container} keyboardShouldPersistTaps={'handled'}>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{passwordlength: ''}}
            validationSchema={passwordschema}
            onSubmit={values => {
              console.log(values);
              generatepasswordstring(+values.passwordlength);
            }} //Number(values.passwordlength) or use +values.passwordlength=>'+'converts string to number .
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordlength && errors.passwordlength && (
                      <Text style={styles.errorText}>
                        {errors.passwordlength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordlength}
                    onChangeText={handleChange('passwordlength')}
                    placeholder="Ex. 9"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include LowerCase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={lowercase}
                    onPress={() => setlowercase(!lowercase)}
                    fillColor={lowercase ? 'green' : 'darkgrey'}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include UpperCase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={uppercase}
                    onPress={() => setuppercase(!uppercase)}
                    fillColor={uppercase ? '#FED85D' : 'darkgrey'}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbols}
                    onPress={() => setsymbol(!symbols)}
                    fillColor={symbols ? 'orange' : 'darkgrey'}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Inlcude Numbers</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={numbers}
                    onPress={() => setnumber(!numbers)}
                    fillColor={numbers ? 'red' : 'darkgrey'}
                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={() => {
                      handleSubmit();
                    }}>
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetpasswordstate();
                    }}>
                    <Text style={styles.secondaryBtnTxt}>Reset Password</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {ispassgenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press To Copy..</Text>
            <Text selectable={true} style={styles.generatedPassword}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 150,
  },
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: 'grey',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
    color: '#fff',

    fontWeight: '700',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
});
