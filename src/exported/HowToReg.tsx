import IconHowToRegFill0Wght100Grad0Opsz48 from '../components/HowToRegFill0Wght100Grad0Opsz48'
import IconHowToRegFill0Wght200Grad0Opsz48 from '../components/HowToRegFill0Wght200Grad0Opsz48'
import IconHowToRegFill0Wght300Grad0Opsz48 from '../components/HowToRegFill0Wght300Grad0Opsz48'
import IconHowToRegFill0Wght400Grad0Opsz48 from '../components/HowToRegFill0Wght400Grad0Opsz48'
import IconHowToRegFill0Wght500Grad0Opsz48 from '../components/HowToRegFill0Wght500Grad0Opsz48'
import IconHowToRegFill0Wght600Grad0Opsz48 from '../components/HowToRegFill0Wght600Grad0Opsz48'
import IconHowToRegFill0Wght700Grad0Opsz48 from '../components/HowToRegFill0Wght700Grad0Opsz48'
import IconHowToRegFill1Wght100Grad0Opsz48 from '../components/HowToRegFill1Wght100Grad0Opsz48'
import IconHowToRegFill1Wght200Grad0Opsz48 from '../components/HowToRegFill1Wght200Grad0Opsz48'
import IconHowToRegFill1Wght300Grad0Opsz48 from '../components/HowToRegFill1Wght300Grad0Opsz48'
import IconHowToRegFill1Wght400Grad0Opsz48 from '../components/HowToRegFill1Wght400Grad0Opsz48'
import IconHowToRegFill1Wght500Grad0Opsz48 from '../components/HowToRegFill1Wght500Grad0Opsz48'
import IconHowToRegFill1Wght600Grad0Opsz48 from '../components/HowToRegFill1Wght600Grad0Opsz48'
import IconHowToRegFill1Wght700Grad0Opsz48 from '../components/HowToRegFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHowToReg = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHowToRegFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHowToRegFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHowToRegFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHowToRegFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHowToRegFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHowToRegFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHowToRegFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHowToRegFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHowToRegFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHowToRegFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHowToRegFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHowToRegFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHowToRegFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHowToRegFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
