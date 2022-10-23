import IconNfcFill0Wght100Grad0Opsz48 from '../components/NfcFill0Wght100Grad0Opsz48'
import IconNfcFill0Wght200Grad0Opsz48 from '../components/NfcFill0Wght200Grad0Opsz48'
import IconNfcFill0Wght300Grad0Opsz48 from '../components/NfcFill0Wght300Grad0Opsz48'
import IconNfcFill0Wght400Grad0Opsz48 from '../components/NfcFill0Wght400Grad0Opsz48'
import IconNfcFill0Wght500Grad0Opsz48 from '../components/NfcFill0Wght500Grad0Opsz48'
import IconNfcFill0Wght600Grad0Opsz48 from '../components/NfcFill0Wght600Grad0Opsz48'
import IconNfcFill0Wght700Grad0Opsz48 from '../components/NfcFill0Wght700Grad0Opsz48'
import IconNfcFill1Wght100Grad0Opsz48 from '../components/NfcFill1Wght100Grad0Opsz48'
import IconNfcFill1Wght200Grad0Opsz48 from '../components/NfcFill1Wght200Grad0Opsz48'
import IconNfcFill1Wght300Grad0Opsz48 from '../components/NfcFill1Wght300Grad0Opsz48'
import IconNfcFill1Wght400Grad0Opsz48 from '../components/NfcFill1Wght400Grad0Opsz48'
import IconNfcFill1Wght500Grad0Opsz48 from '../components/NfcFill1Wght500Grad0Opsz48'
import IconNfcFill1Wght600Grad0Opsz48 from '../components/NfcFill1Wght600Grad0Opsz48'
import IconNfcFill1Wght700Grad0Opsz48 from '../components/NfcFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNfc = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNfcFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNfcFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNfcFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNfcFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNfcFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNfcFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNfcFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNfcFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNfcFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNfcFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNfcFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNfcFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNfcFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNfcFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
