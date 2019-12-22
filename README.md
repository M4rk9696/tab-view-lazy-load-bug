# A repo to reproduce #890 in react-native-tab-view

## Steps to start
- `yarn install`
- `yarn ios`

## Steps to reproduce

### Scenario 1 - Ios
- Click on Tab `Second`
- Click back on Tab `First`
- When coming back to First tab rendering of `Third` tab is called

### Scenario 2 - Ios
- Click on Tab `Third`
- Both tabs `Second` and `Third` get rendered

### Scenario 3 - Ios
- Click on Tab `Fourth`
- Tabs `Second` and `Fourth` get rendered

### Scenario 4 - Android
- Click on Tab `Third`
- Both tabs `Second` and `Third` get rendered

## Link to issue
https://github.com/react-native-community/react-native-tab-view/issues/890