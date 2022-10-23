import IconAccountBalanceWalletFill0Wght100Grad0Opsz48 from '../components/AccountBalanceWalletFill0Wght100Grad0Opsz48'
import IconAccountBalanceWalletFill0Wght200Grad0Opsz48 from '../components/AccountBalanceWalletFill0Wght200Grad0Opsz48'
import IconAccountBalanceWalletFill0Wght300Grad0Opsz48 from '../components/AccountBalanceWalletFill0Wght300Grad0Opsz48'
import IconAccountBalanceWalletFill0Wght400Grad0Opsz48 from '../components/AccountBalanceWalletFill0Wght400Grad0Opsz48'
import IconAccountBalanceWalletFill0Wght500Grad0Opsz48 from '../components/AccountBalanceWalletFill0Wght500Grad0Opsz48'
import IconAccountBalanceWalletFill0Wght600Grad0Opsz48 from '../components/AccountBalanceWalletFill0Wght600Grad0Opsz48'
import IconAccountBalanceWalletFill0Wght700Grad0Opsz48 from '../components/AccountBalanceWalletFill0Wght700Grad0Opsz48'
import IconAccountBalanceWalletFill1Wght100Grad0Opsz48 from '../components/AccountBalanceWalletFill1Wght100Grad0Opsz48'
import IconAccountBalanceWalletFill1Wght200Grad0Opsz48 from '../components/AccountBalanceWalletFill1Wght200Grad0Opsz48'
import IconAccountBalanceWalletFill1Wght300Grad0Opsz48 from '../components/AccountBalanceWalletFill1Wght300Grad0Opsz48'
import IconAccountBalanceWalletFill1Wght400Grad0Opsz48 from '../components/AccountBalanceWalletFill1Wght400Grad0Opsz48'
import IconAccountBalanceWalletFill1Wght500Grad0Opsz48 from '../components/AccountBalanceWalletFill1Wght500Grad0Opsz48'
import IconAccountBalanceWalletFill1Wght600Grad0Opsz48 from '../components/AccountBalanceWalletFill1Wght600Grad0Opsz48'
import IconAccountBalanceWalletFill1Wght700Grad0Opsz48 from '../components/AccountBalanceWalletFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAccountBalanceWallet = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAccountBalanceWalletFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAccountBalanceWalletFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAccountBalanceWalletFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAccountBalanceWalletFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAccountBalanceWalletFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAccountBalanceWalletFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAccountBalanceWalletFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAccountBalanceWalletFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAccountBalanceWalletFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAccountBalanceWalletFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAccountBalanceWalletFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAccountBalanceWalletFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAccountBalanceWalletFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAccountBalanceWalletFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
