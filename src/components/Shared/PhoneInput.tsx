import { createStyles, NativeSelect, TextInput } from '@mantine/core';

type PhoneInputProps = {
  label?: string;
  withAsterisk?: boolean;
  defaultValue: string;
};

const countryCodeData = ['+234', '+229', '+123'];

const useCodeSelectStyles = createStyles(() => ({
  input: {
    fontWeight: 500,
    padding: '0.5rem',
    width: '5rem',
    borderRadius: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderRight: '1px solid #e6e6e6',
  },
}));

const usePhoneInputStyles = createStyles(() => ({
  root: {
    flex: 1,
  },
  input: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    paddingLeft: '6rem',
  },
  rightSection: {
    left: 22,
  },
}));

const PhoneInput = ({
  label = 'Phone Number',
  withAsterisk,
  defaultValue,
}: PhoneInputProps) => {
  const { classes: selectClasses } = useCodeSelectStyles();
  const { classes: phoneClasses } = usePhoneInputStyles();

  const selectCountryCode = (
    <NativeSelect
      data={countryCodeData}
      classNames={{ input: selectClasses.input }}
    />
  );

  return (
    <TextInput
      classNames={{
        input: phoneClasses.input,
        rightSection: phoneClasses.rightSection,
      }}
      type="tel"
      placeholder="802-3456-789"
      label={label}
      defaultValue={defaultValue}
      withAsterisk={!!withAsterisk}
      rightSection={selectCountryCode}
    />
  );
};

export default PhoneInput;
