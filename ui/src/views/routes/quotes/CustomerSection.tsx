import { TextField } from '@material-ui/core';
import { CustomerDto } from 'api/api-models';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import styles from './CustomerSection.module.scss';
import { QuoteContext } from './Quote';
import { QuoteSection } from './QuoteSection';

export const CustomerSection: React.FC = () => {
  const readOnly = false;

  const quote = useContext(QuoteContext);

  // TODO
  const sectionTitle = 'Customer';
  const sectionSummary = null;

  const formMethods = useForm<CustomerDto>();
  const { register, handleSubmit, reset, errors } = formMethods;
  const onSubmit = (data: CustomerDto) => {
    console.log({ data });
  };

  return (
    <QuoteSection<CustomerDto>
      sectionTitle="Customer"
      sectionSummary="cutomer summary"
      formMethods={formMethods}
      onSubmit={onSubmit}>
      <div className={styles.fields}>
        <TextField
          className={styles.name}
          name="name"
          label="Full Name"
          inputRef={register({ required: { value: true, message: 'Name is required' } })}
          inputProps={{ readOnly }}
          error={!!errors.name}
          helperText={errors?.name?.message}
        />
        <TextField
          className={styles.phone}
          name="phone"
          label="Phone"
          inputRef={register}
          inputProps={{ readOnly }}
        />
        <TextField
          className={styles.address}
          name="address"
          label="Home Address"
          inputRef={register}
          inputProps={{ readOnly }}
        />
        <TextField
          className={styles.email}
          name="email"
          label="Email"
          inputRef={register({
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please provide a valid email address',
            },
            required: { value: true, message: 'Email is required' },
          })}
          inputProps={{ readOnly }}
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
      </div>
    </QuoteSection>
  );
};
