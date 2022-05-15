export const builderConfig = {
    builder: {
      basic: false,
      customBasic: {
        title: 'Componente de bază',
        default: true,
        weight: 0,
        components: {
          textfield: true,
          textarea: true,
          email: true,
          phoneNumber: true,
        }
      },
      layout: {
        title: 'Aspect',
      },
      custom: {
        title: 'User Fields',
        weight: 10,
        components: {
          firstName: {
            title: 'Prenume',
            key: 'firstName',
            icon: 'terminal',
            schema: {
              label: 'Prenume',
              type: 'textfield',
              key: 'firstName',
              input: true
            }
          },
          lastName: {
            title: 'Nume',
            key: 'lastName',
            icon: 'terminal',
            schema: {
              label: 'Nume',
              type: 'textfield',
              key: 'lastName',
              input: true
            }
          },
          email: {
            title: 'Email',
            key: 'email',
            icon: 'at',
            schema: {
              label: 'Email',
              type: 'email',
              key: 'email',
              input: true
            }
          },
          phoneNumber: {
            title: 'Telefon',
            key: 'mobilePhone',
            icon: 'phone-square',
            schema: {
              label: 'Telefon',
              type: 'phoneNumber',
              key: 'mobilePhone',
              input: true
            }
          }
        }
      },
      premium: false,
      data: false,
    },
    editForm: {
      textfield: [
        {
          key: 'display',
          ignore: false,
          components: [
            {
              key: 'tooltip',
              ignore: true,
            },
            {
              key: 'prefix',
              ignore: true,
            },
            {
              key: 'suffix',
              ignore: true,
            },
            {
              key: 'inputMask',
              ignore: true,
            },
            {
              key: 'displayMask',
              ignore: true,
            },
            {
              key: 'customClass',
              ignore: true,
            },
            {
              key: 'tabindex',
              ignore: true,
            },
            {
              key: 'hideLabel',
              ignore: true,
            },
            {
              key: 'showWordCount',
              ignore: true,
            },
            {
              key: 'mask',
              ignore: true,
            },
            {
              key: 'allowMultipleMasks',
              ignore: true,
            },
            {
              key: 'tableView',
              ignore: true,
            },
            {
              key: 'modalEdit',
              ignore: true,
            },
            {
              key: 'clearOnHide',
              ignore: true,
            },
            {
              key: 'inputMaskPlaceholderChar',
              ignore: true,
            },
            {
              key: 'autocomplete',
              ignore: true,
            },
            {
              key: 'hidden',
              ignore: true,
            },
            {
              key: 'autofocus',
              ignore: true,
            },
            {
              key: 'spellcheck',
              ignore: true,
            },

          ]
        },
        {
          key: 'api',
          ignore: true
        },
        {
          key: 'data',
          ignore: true
        },
        {
          key: 'conditional',
          ignore: true
        },
        {
          key: 'logic',
          ignore: true
        },
        {
          key: 'layout',
          ignore: true
        }
      ],
      email: [
        {
          key: 'display',
          ignore: false,
          components: [
            {
              key: 'tooltip',
              ignore: true,
            },
            {
              key: 'prefix',
              ignore: true,
            },
            {
              key: 'suffix',
              ignore: true,
            },
            {
              key: 'inputMask',
              ignore: true,
            },
            {
              key: 'displayMask',
              ignore: true,
            },
            {
              key: 'customClass',
              ignore: true,
            },
            {
              key: 'tabindex',
              ignore: true,
            },
            {
              key: 'hideLabel',
              ignore: true,
            },
            {
              key: 'showWordCount',
              ignore: true,
            },
            {
              key: 'mask',
              ignore: true,
            },
            {
              key: 'allowMultipleMasks',
              ignore: true,
            },
            {
              key: 'tableView',
              ignore: true,
            },
            {
              key: 'modalEdit',
              ignore: true,
            },
            {
              key: 'clearOnHide',
              ignore: true,
            },
            {
              key: 'inputMaskPlaceholderChar',
              ignore: true,
            },
            {
              key: 'autocomplete',
              ignore: true,
            },
            {
              key: 'hidden',
              ignore: true,
            },
            {
              key: 'autofocus',
              ignore: true,
            },
            {
              key: 'spellcheck',
              ignore: true,
            },

          ]
        },
        {
          key: 'data',
          ignore: true,
        },
        {
          key: 'api',
          ignore: true
        },
        {
          key: 'conditional',
          ignore: true
        },
        {
          key: 'logic',
          ignore: true
        },
        {
          key: 'layout',
          ignore: true
        }
      ]
    }
  };