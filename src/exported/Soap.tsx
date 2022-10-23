import IconSoapFill0Wght100Grad0Opsz48 from '../components/SoapFill0Wght100Grad0Opsz48'
import IconSoapFill0Wght200Grad0Opsz48 from '../components/SoapFill0Wght200Grad0Opsz48'
import IconSoapFill0Wght300Grad0Opsz48 from '../components/SoapFill0Wght300Grad0Opsz48'
import IconSoapFill0Wght400Grad0Opsz48 from '../components/SoapFill0Wght400Grad0Opsz48'
import IconSoapFill0Wght500Grad0Opsz48 from '../components/SoapFill0Wght500Grad0Opsz48'
import IconSoapFill0Wght600Grad0Opsz48 from '../components/SoapFill0Wght600Grad0Opsz48'
import IconSoapFill0Wght700Grad0Opsz48 from '../components/SoapFill0Wght700Grad0Opsz48'
import IconSoapFill1Wght100Grad0Opsz48 from '../components/SoapFill1Wght100Grad0Opsz48'
import IconSoapFill1Wght200Grad0Opsz48 from '../components/SoapFill1Wght200Grad0Opsz48'
import IconSoapFill1Wght300Grad0Opsz48 from '../components/SoapFill1Wght300Grad0Opsz48'
import IconSoapFill1Wght400Grad0Opsz48 from '../components/SoapFill1Wght400Grad0Opsz48'
import IconSoapFill1Wght500Grad0Opsz48 from '../components/SoapFill1Wght500Grad0Opsz48'
import IconSoapFill1Wght600Grad0Opsz48 from '../components/SoapFill1Wght600Grad0Opsz48'
import IconSoapFill1Wght700Grad0Opsz48 from '../components/SoapFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSoap = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSoapFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSoapFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSoapFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSoapFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSoapFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSoapFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSoapFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSoapFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSoapFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSoapFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSoapFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSoapFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSoapFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSoapFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
