import IconDocumentScannerFill0Wght100Grad0Opsz48 from '../components/DocumentScannerFill0Wght100Grad0Opsz48'
import IconDocumentScannerFill0Wght200Grad0Opsz48 from '../components/DocumentScannerFill0Wght200Grad0Opsz48'
import IconDocumentScannerFill0Wght300Grad0Opsz48 from '../components/DocumentScannerFill0Wght300Grad0Opsz48'
import IconDocumentScannerFill0Wght400Grad0Opsz48 from '../components/DocumentScannerFill0Wght400Grad0Opsz48'
import IconDocumentScannerFill0Wght500Grad0Opsz48 from '../components/DocumentScannerFill0Wght500Grad0Opsz48'
import IconDocumentScannerFill0Wght600Grad0Opsz48 from '../components/DocumentScannerFill0Wght600Grad0Opsz48'
import IconDocumentScannerFill0Wght700Grad0Opsz48 from '../components/DocumentScannerFill0Wght700Grad0Opsz48'
import IconDocumentScannerFill1Wght100Grad0Opsz48 from '../components/DocumentScannerFill1Wght100Grad0Opsz48'
import IconDocumentScannerFill1Wght200Grad0Opsz48 from '../components/DocumentScannerFill1Wght200Grad0Opsz48'
import IconDocumentScannerFill1Wght300Grad0Opsz48 from '../components/DocumentScannerFill1Wght300Grad0Opsz48'
import IconDocumentScannerFill1Wght400Grad0Opsz48 from '../components/DocumentScannerFill1Wght400Grad0Opsz48'
import IconDocumentScannerFill1Wght500Grad0Opsz48 from '../components/DocumentScannerFill1Wght500Grad0Opsz48'
import IconDocumentScannerFill1Wght600Grad0Opsz48 from '../components/DocumentScannerFill1Wght600Grad0Opsz48'
import IconDocumentScannerFill1Wght700Grad0Opsz48 from '../components/DocumentScannerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDocumentScanner = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDocumentScannerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDocumentScannerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDocumentScannerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDocumentScannerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDocumentScannerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDocumentScannerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDocumentScannerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDocumentScannerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDocumentScannerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDocumentScannerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDocumentScannerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDocumentScannerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDocumentScannerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDocumentScannerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
