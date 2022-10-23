import IconLaptopChromebookFill0Wght100Grad0Opsz48 from '../components/LaptopChromebookFill0Wght100Grad0Opsz48'
import IconLaptopChromebookFill0Wght200Grad0Opsz48 from '../components/LaptopChromebookFill0Wght200Grad0Opsz48'
import IconLaptopChromebookFill0Wght300Grad0Opsz48 from '../components/LaptopChromebookFill0Wght300Grad0Opsz48'
import IconLaptopChromebookFill0Wght400Grad0Opsz48 from '../components/LaptopChromebookFill0Wght400Grad0Opsz48'
import IconLaptopChromebookFill0Wght500Grad0Opsz48 from '../components/LaptopChromebookFill0Wght500Grad0Opsz48'
import IconLaptopChromebookFill0Wght600Grad0Opsz48 from '../components/LaptopChromebookFill0Wght600Grad0Opsz48'
import IconLaptopChromebookFill0Wght700Grad0Opsz48 from '../components/LaptopChromebookFill0Wght700Grad0Opsz48'
import IconLaptopChromebookFill1Wght100Grad0Opsz48 from '../components/LaptopChromebookFill1Wght100Grad0Opsz48'
import IconLaptopChromebookFill1Wght200Grad0Opsz48 from '../components/LaptopChromebookFill1Wght200Grad0Opsz48'
import IconLaptopChromebookFill1Wght300Grad0Opsz48 from '../components/LaptopChromebookFill1Wght300Grad0Opsz48'
import IconLaptopChromebookFill1Wght400Grad0Opsz48 from '../components/LaptopChromebookFill1Wght400Grad0Opsz48'
import IconLaptopChromebookFill1Wght500Grad0Opsz48 from '../components/LaptopChromebookFill1Wght500Grad0Opsz48'
import IconLaptopChromebookFill1Wght600Grad0Opsz48 from '../components/LaptopChromebookFill1Wght600Grad0Opsz48'
import IconLaptopChromebookFill1Wght700Grad0Opsz48 from '../components/LaptopChromebookFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLaptopChromebook = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLaptopChromebookFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLaptopChromebookFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLaptopChromebookFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLaptopChromebookFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLaptopChromebookFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLaptopChromebookFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLaptopChromebookFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLaptopChromebookFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLaptopChromebookFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLaptopChromebookFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLaptopChromebookFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLaptopChromebookFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLaptopChromebookFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLaptopChromebookFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
