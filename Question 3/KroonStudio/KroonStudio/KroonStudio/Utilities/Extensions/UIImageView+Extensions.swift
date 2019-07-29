//
//  UIImageView+Extensions.swift
//  KroonStudio
//
//  Created by Djuro Alfirevic on 7/29/19.
//  Copyright © 2019 Kroon Studio. All rights reserved.
//

import Foundation
import UIKit

var cache = [String: UIImage]()
extension UIImageView {
    
    func loadImage(from imageUrl: String) {
        if let image = cache[imageUrl] {
            self.image = image
            return
        }
        
        if let url = URL(string: imageUrl) {
            DispatchQueue.global(qos: .userInitiated).async {
                let data = try? Data(contentsOf: url)
                
                DispatchQueue.main.async {
                    if let data = data, url.absoluteString == imageUrl {
                        if let image = UIImage(data: data) {
                            self.image = image
                            cache[imageUrl] = image
                        }
                    }
                }
            }
        }
    }
    
}
