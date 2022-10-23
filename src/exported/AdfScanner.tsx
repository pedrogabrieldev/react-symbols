import IconAdfScannerFill0Wght100Grad0Opsz48 from '../components/AdfScannerFill0Wght100Grad0Opsz48'
import IconAdfScannerFill0Wght200Grad0Opsz48 from '../components/AdfScannerFill0Wght200Grad0Opsz48'
import IconAdfScannerFill0Wght300Grad0Opsz48 from '../components/AdfScannerFill0Wght300Grad0Opsz48'
import IconAdfScannerFill0Wght400Grad0Opsz48 from '../components/AdfScannerFill0Wght400Grad0Opsz48'
import IconAdfScannerFill0Wght500Grad0Opsz48 from '../components/AdfScannerFill0Wght500Grad0Opsz48'
import IconAdfScannerFill0Wght600Grad0Opsz48 from '../components/AdfScannerFill0Wght600Grad0Opsz48'
import IconAdfScannerFill0Wght700Grad0Opsz48 from '../components/AdfScannerFill0Wght700Grad0Opsz48'
import IconAdfScannerFill1Wght100Grad0Opsz48 from '../components/AdfScannerFill1Wght100Grad0Opsz48'
import IconAdfScannerFill1Wght200Grad0Opsz48 from '../components/AdfScannerFill1Wght200Grad0Opsz48'
import IconAdfScannerFill1Wght300Grad0Opsz48 from '../components/AdfScannerFill1Wght300Grad0Opsz48'
import IconAdfScannerFill1Wght400Grad0Opsz48 from '../components/AdfScannerFill1Wght400Grad0Opsz48'
import IconAdfScannerFill1Wght500Grad0Opsz48 from '../components/AdfScannerFill1Wght500Grad0Opsz48'
import IconAdfScannerFill1Wght600Grad0Opsz48 from '../components/AdfScannerFill1Wght600Grad0Opsz48'
import IconAdfScannerFill1Wght700Grad0Opsz48 from '../components/AdfScannerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAdfScanner = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAdfScannerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAdfScannerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAdfScannerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAdfScannerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAdfScannerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAdfScannerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAdfScannerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAdfScannerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAdfScannerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAdfScannerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAdfScannerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAdfScannerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAdfScannerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAdfScannerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
