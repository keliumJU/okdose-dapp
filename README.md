<div align="center">
  <h1>OKDOSE</h1>
</div>
<br>

OKDOSE is a decentralized application that supports the calculation of medication dosages and treatment time for tropical diseases such as Leishmaniasis, Malaria, Chagas, Rabies, Tuberculosis and Leprosy. All the dosages are calculated based on formulas validated by medical specialists and criteria of the World Health Organization.

## Why OKDOSE is decentralized?

In OKDOSE, drug formulations must be protected so that third parties cannot alter them and put patients' health at risk. The development in web3.0 with a cutting-edge technology such as blockchains, would allow to have a decentralized application with smart-contracts that can be modified only by its creators. This is why the medicines' formulations are hosted on the [NEAR](https://near.org/) blockchain to avoid dosages modification.

---

## Internationalization

For the internationalization of the application, the [i18next](https://www.i18next.com/) library was used. The supported languages are English, Spanish and French.

If the browser is setup in one of the supported languages, the application will be displayed in this language by default. If another language is set, the language displayed will be English.

---
## Installation

### **Prerequisites**

Install a current version of Node.js. NEAR is targeting versions 16+ (version 18 not supported).

### **Smart contracts setup**

To keep private the formulations where the dosages are calculated, the project has two types of contracts. The contracts with the original dosages information, which are in the submodule in a private repository and the contracts for the contributors, which return the same type of response as the original contracts, to ensure the correct functioning of the application when you want to make a contribution.

In the project root, there is a .env.example file with the accounts where the contracts for contributors are deployed. Make a copy of this file in an .env file before starting the application.

It is important to note that the okdose-dapp-contracts folder will be empty, as it is the private repository of the contracts, but contributors will be able to run the application without any problems.

To set up the repository locally, check the [Contributing](#contributing) section.

---

## Tests

There are integration tests in the project root where the connection with NEAR for all the contracts and the type of responses are tested.

In `okdose-web/tests` there are tests for the components to verify that the front end works as expected.

---
## Changelog

Features and bug fixes are listed in the [CHANGELOG][changelog] file.

## Code of conduct

We welcome everyone to contribute. Make sure you have read the [CODE_OF_CONDUCT][coc] before.

## Contributing

For information on how to contribute, please refer to our [CONTRIBUTING][contributing] guide.

## License

This library is licensed under an MIT license. See [LICENSE][license] for details.

## Acknowledgements

Made with 💙 by [kommitters Open Source](https://kommit.co)

[license]: https://github.com/kommitters/.template/blob/main/LICENSE
[coc]: https://github.com/kommitters/.template/blob/main/CODE_OF_CONDUCT.md
[changelog]: https://github.com/kommitters/.template/blob/main/CHANGELOG.md
[contributing]: https://github.com/kommitters/.template/blob/main/CONTRIBUTING.md
