import IconRedeemFill0Wght100Grad0Opsz48 from '../components/RedeemFill0Wght100Grad0Opsz48'
import IconRedeemFill0Wght200Grad0Opsz48 from '../components/RedeemFill0Wght200Grad0Opsz48'
import IconRedeemFill0Wght300Grad0Opsz48 from '../components/RedeemFill0Wght300Grad0Opsz48'
import IconRedeemFill0Wght400Grad0Opsz48 from '../components/RedeemFill0Wght400Grad0Opsz48'
import IconRedeemFill0Wght500Grad0Opsz48 from '../components/RedeemFill0Wght500Grad0Opsz48'
import IconRedeemFill0Wght600Grad0Opsz48 from '../components/RedeemFill0Wght600Grad0Opsz48'
import IconRedeemFill0Wght700Grad0Opsz48 from '../components/RedeemFill0Wght700Grad0Opsz48'
import IconRedeemFill1Wght100Grad0Opsz48 from '../components/RedeemFill1Wght100Grad0Opsz48'
import IconRedeemFill1Wght200Grad0Opsz48 from '../components/RedeemFill1Wght200Grad0Opsz48'
import IconRedeemFill1Wght300Grad0Opsz48 from '../components/RedeemFill1Wght300Grad0Opsz48'
import IconRedeemFill1Wght400Grad0Opsz48 from '../components/RedeemFill1Wght400Grad0Opsz48'
import IconRedeemFill1Wght500Grad0Opsz48 from '../components/RedeemFill1Wght500Grad0Opsz48'
import IconRedeemFill1Wght600Grad0Opsz48 from '../components/RedeemFill1Wght600Grad0Opsz48'
import IconRedeemFill1Wght700Grad0Opsz48 from '../components/RedeemFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRedeem = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRedeemFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRedeemFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRedeemFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRedeemFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRedeemFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRedeemFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRedeemFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRedeemFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRedeemFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRedeemFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRedeemFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRedeemFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRedeemFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRedeemFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
