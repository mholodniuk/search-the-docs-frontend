import { FormControl } from "@angular/forms";

export function isDefined<T>(arg: T | null | undefined): arg is T extends null | undefined ? never : T {
  return arg !== null && arg !== undefined;
}

export function requiredFileType(type: string) {
  return function (control: FormControl) {
    const file = control.value;
    if (file) {
      const extension = file.name.split('.')[1].toLowerCase();
      if (type.toLowerCase() !== extension.toLowerCase()) {
        return {
          requiredFileType: true
        };
      }
      return null;
    }
    return null;
  };
}
