import * as React from 'react';
import clsx from 'clsx';

export interface AckoTextInputProps
  extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * ID of the input
   * @type {string}
   */
  id: string;

  /**
   * Label text linked to the input
   * @type {string}
   */
  labelText: string;

  /**
   * Helper text to help the user
   * @type {string}
   * @defaultValue undefined and therefore not displayed by default
   */
  helperText?: string;

  /**
   * Placeholder
   * @type {string}
   */
  placeholder?: string;

  /**
   * Is a TextArea
   * @type {boolean}
   * @defaultValue false (Input)
   */
  multiline?: boolean;

  /**
   * Whether input is successful or not
   * @type {boolean}
   * @defaultValue false
   */
  valid?: boolean;

  /**
   * Whether input is in error or not
   * @type {boolean}
   * @defaultValue false
   */
  error?: boolean;
}

export const AckoTextInput = ({
  className,
  disabled = false,
  error = false,
  helperText,
  id,
  labelText,
  multiline = false,
  placeholder,
  valid = false,
  ...props
}: AckoTextInputProps) => {
  return (
    <>
      <label className="Acko-text-input_label" htmlFor={id}>
        {labelText}
      </label>

      {multiline ? (
        <textarea
          className={clsx(
            'Acko-text-input',
            className,
            { 'Acko-text-input--valid': valid && !disabled },
            { 'Acko-text-input--error': error && !disabled },
          )}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
      ) : (
        <input
          className={clsx(
            'Acko-text-input',
            className,
            { 'Acko-text-input--valid': valid && !disabled },
            { 'Acko-text-input--error': error && !disabled },
          )}
          id={id}
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
      )}

      {helperText && (
        <p className="Acko-text-input_helper-text">{helperText}</p>
      )}
    </>
  );
};

export default React.memo(AckoTextInput);
