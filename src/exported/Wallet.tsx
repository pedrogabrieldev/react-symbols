import IconWalletFill0Wght100Grad0Opsz48 from '../components/WalletFill0Wght100Grad0Opsz48'
import IconWalletFill0Wght200Grad0Opsz48 from '../components/WalletFill0Wght200Grad0Opsz48'
import IconWalletFill0Wght300Grad0Opsz48 from '../components/WalletFill0Wght300Grad0Opsz48'
import IconWalletFill0Wght400Grad0Opsz48 from '../components/WalletFill0Wght400Grad0Opsz48'
import IconWalletFill0Wght500Grad0Opsz48 from '../components/WalletFill0Wght500Grad0Opsz48'
import IconWalletFill0Wght600Grad0Opsz48 from '../components/WalletFill0Wght600Grad0Opsz48'
import IconWalletFill0Wght700Grad0Opsz48 from '../components/WalletFill0Wght700Grad0Opsz48'
import IconWalletFill1Wght100Grad0Opsz48 from '../components/WalletFill1Wght100Grad0Opsz48'
import IconWalletFill1Wght200Grad0Opsz48 from '../components/WalletFill1Wght200Grad0Opsz48'
import IconWalletFill1Wght300Grad0Opsz48 from '../components/WalletFill1Wght300Grad0Opsz48'
import IconWalletFill1Wght400Grad0Opsz48 from '../components/WalletFill1Wght400Grad0Opsz48'
import IconWalletFill1Wght500Grad0Opsz48 from '../components/WalletFill1Wght500Grad0Opsz48'
import IconWalletFill1Wght600Grad0Opsz48 from '../components/WalletFill1Wght600Grad0Opsz48'
import IconWalletFill1Wght700Grad0Opsz48 from '../components/WalletFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWallet = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWalletFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWalletFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWalletFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWalletFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWalletFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWalletFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWalletFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWalletFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWalletFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWalletFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWalletFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWalletFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWalletFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWalletFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
